import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextoPrincipal from "../../components/TextoPrincipal";


export default function Relatorios() {
  return (
    <>
      <Header />
      <main className="flex">
        <TextoPrincipal
          titulo="Relatórios"
          descricao=""
        />
      </main>
      <Footer />
    </>
  );
}