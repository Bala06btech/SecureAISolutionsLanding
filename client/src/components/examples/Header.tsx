import Header from "../landing/Header";

export default function HeaderExample() {
  return (
    <Header onBookConsultation={() => console.log("Book consultation clicked")} />
  );
}
