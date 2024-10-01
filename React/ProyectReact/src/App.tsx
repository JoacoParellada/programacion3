import { AppProducts } from "./components/AppProduct/AppProducts";
import { FormProducts } from "./components/AppProduct/FormProduct/FormProducts";
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter";
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
import { FormComponent } from "./components/FormComponent/FormComponent";
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent";

export const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
      {/* <MiPrimerComponent text={"Curso React"} color="#61DAFB" fontSize={3} />
      <ComponentCounter />
      <ComponentUseEffect /> */}
      {/* <FormComponent /> */}
      <AppProducts />
    </div>
  );
};
