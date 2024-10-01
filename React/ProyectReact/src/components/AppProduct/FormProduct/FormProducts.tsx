import Form from "react-bootstrap/Form";
import { useForm } from "../../../hooks/useForm";
import { FC } from "react";
import { Button } from "react-bootstrap";
interface IPropsFormProducts {
  handleAddProduct: Function;
}

export const FormProducts: FC<IPropsFormProducts> = ({ handleAddProduct }) => {
  const { handleChange, values, resetForm } = useForm({
    nombre: "",
    imagen: "",
    precio: "",
  });
  const handleSubmitForm = () => {
    handleAddProduct(values);
    resetForm();
  };
  return (
    <Form className="p-4 border rounded m-3">
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          placeholder="Ingrese nombre del producto"
          value={values.nombre}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="formNombre">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          type="text"
          name="imagen"
          placeholder="Ingrese imagen del producto"
          value={values.imagen}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="formNombre">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          name="precio"
          placeholder="Ingrese precio del producto"
          value={values.precio}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <div className="d-flex justify-content-center mt-4">
        <Button onClick={handleSubmitForm} variant="primary">
          Enviar Producto
        </Button>
      </div>
    </Form>
  );
};
