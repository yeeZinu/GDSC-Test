import { useMemo, useState } from "react";

export type SeatState = "unoccupied" | "selected" | "occupied";

interface Seat {
  id: string; //고유한 값
  name: string; // A1, A2
  state: SeatState; // unoccupied, selected, occupied
}

function useSeats() {
  const mockSeats: Seat[] = [];
  // 15개짜리 0부터 14의 배열을 만들고 그걸 반복
  Array.from(Array(15).keys()).forEach((index) => {
    // A0, A1, A2
    mockSeats.push({ id: `${index}`, name: `A${index}`, state: `unoccupied` });
  });

  mockSeats[1].state = "occupied";

  const [seats, setSeats] = useState<Seat[]>(mockSeats);

  const selectedSeats = useMemo(() => {
    //MDN array filter
    // 고차함수 map filter reducer
    return seats.filter((eachSeat) => eachSeat.state === "selected");
  }, [seats]);

  // () 반환
  // {} 함수
  const onClickSeat = (clickedSeat: Seat) => {
    //리펙토링이 가능할듯하다.
    setSeats((prev) => {
      return prev.map((eachSeat) =>
        eachSeat.id === clickedSeat.id
          ? {
              id: eachSeat.id,
              name: eachSeat.name,
              state: eachSeat.state === "selected" ? "unoccupied" : "selected",
            }
          : {
              id: eachSeat.id,
              name: eachSeat.name,
              state: eachSeat.state,
            }
      );
    });
  };

  return { seats, onClickSeat, selectedSeats };
}

export default useSeats;
