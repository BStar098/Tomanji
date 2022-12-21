const returnActualDate = () => {
  const months = {
    "01": "Enero",
    "02": "Febrero",
    "03": "Marzo",
    "04": "Abril",
    "05": "Mayo",
    "06": "Junio",
    "07": "Julio",
    "08": "Agosto",
    "09": "Septiembre",
    "10": "Octubre",
    "11": "Noviembre",
    "12": "Diciembre",
  };
  const date = `${
    String(new Date().getDate()).length === 1
      ? `0${new Date().getDate()}`
      : new Date().getDate()
  } ${
    String(new Date().getMonth() + 1).length === 1
      ? months[`0${new Date().getMonth() + 1}`]
      : months[new Date().getMonth() + 1]
  } ${new Date().getFullYear()}`;

  return date;
};

export default returnActualDate;
