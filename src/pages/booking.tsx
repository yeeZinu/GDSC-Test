//요구사항
// 1. 좌석들을 렌더링
// 1-1. 좌석상태
// 2. 좌석들을 선택할 수 있어야 되고
// 3. 영화들을 선택할 수 있어야되고
// 4. 좌석의 수과 영화 가격을 기준으로 보여줘야 되고
// 5. 결제화면으로 보내야 되고

import styled, { css } from "styled-components";
import useSeats, { SeatState } from "../hooks/useSeats";

function Booking() {
  const { seats, onClickSeat, selectedSeats } = useSeats();

//   console.log(selectedSeats);
  return (
    <div>
      {seats.map((eachSeat) => (
        <StyledSeatButton
          key={eachSeat.id}
          state={eachSeat.state}
          onClick={() => onClickSeat(eachSeat)}
        >
          {eachSeat.name}
        </StyledSeatButton>
      ))}
      <h2>{selectedSeats.length}개 선택했어요</h2>
    </div>
  );
}

export default Booking;

const StyledSeatButton = styled.button<{ state: SeatState }>`
  /*and*/
  /* true && 'foo' => 'foo'*/
  ${({ state }) => state === "unoccupied" && unoccupiedStyle}
  ${({ state }) => state === "selected" && selectedStyle}
    ${({ state }) => state === "occupied" && occupiedStyle}
`;

const unoccupiedStyle = css`
  background-color: green; ;
`;

const selectedStyle = css`
  background-color: blue; ;
`;

const occupiedStyle = css`
  background-color: red; ;
`;
