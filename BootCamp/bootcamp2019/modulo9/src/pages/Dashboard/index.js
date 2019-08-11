import React, { useState, useMemo } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import api from "~/services/api";

import { format, subDays, addDays } from "date-fns";
import pt from "date-fns/locale/pt";

import { Container, Time } from "./styles";

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormated = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button onClick={handlePrevDay} type="button">
          <MdChevronLeft color="#fff" size={36} />
        </button>
        <strong>{dateFormated}</strong>
        <button onClick={handleNextDay} type="button">
          <MdChevronRight color="#fff" size={36} />
        </button>
      </header>
      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Ricardo Ferreira</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Ricardo Ferreira</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Ricardo Ferreira</span>
        </Time>
      </ul>
    </Container>
  );
}
