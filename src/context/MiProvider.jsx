import { createContext, useState } from "react";

export const Contexto = createContext();

export default function MiProvider({ children }) {
  const [receta, setReceta] = useState([
    {
		id: 1,
		title: "Tarta de caballa",
		description: "Disfruta de una deliciosa tarta de caballa con una mezcla perfecta de pescado fresco y verduras. Rellena la masa con una suave mezcla de caballa, cebollas, pimientos y hierbas frescas. Hornea hasta que la masa esté dorada y crujiente. Sirve caliente y disfruta de un festín de sabores marinos.",
		imageUrl: "https://www.bing.com/th?id=OIP.N1gewtfrWjx7JhBisOs3_AHaFP&w=166&h=110&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
	  },
	  {
		id: 2,
		title: "Sopa de tomate",
		description: "Esta sopa clásica es reconfortante y deliciosa. Comienza salteando cebollas y ajo en aceite de oliva, luego agrega tomates maduros, caldo de verduras y hierbas frescas. Cocina a fuego lento hasta que los sabores se mezclen a la perfección. Sirve caliente, preferiblemente con crujientes trozos de pan.",
		imageUrl: "https://th.bing.com/th/id/R.039fffc3ee53663dfae84726755c1049?rik=iBiFuzH5xS19ww&pid=ImgRaw&r=0"
	  },
	  {
		  id: 3,
		  title: "Pizza margharita",
		  description: "Extiende una fina capa de salsa de tomate sobre la masa de pizza. Cubre con mozzarella fresca y tomates en rodajas. Espolvorea con albahaca fresca y un chorrito de aceite de oliva. Hornea hasta que la masa esté crujiente y el queso se derrita. ¡La pizza Margherita clásica está lista para disfrutar!",
		  imageUrl: "https://th.bing.com/th/id/OIP.Xlx7oZVd_khsvg4O92O6DgHaE8?w=289&h=193&c=7&r=0&o=5&pid=1.7"
		},
		{
		  id: 4,
		  title: "fideos al pesto",
		  description: "Cocina los fideos de tu elección según las instrucciones del paquete. Prepara una deliciosa salsa pesto con albahaca fresca, ajo, piñones, queso parmesano y aceite de oliva. Mezcla los fideos cocidos con la salsa pesto y sirve con un poco de queso parmesano rallado por encima.",
		  imageUrl: "https://th.bing.com/th?id=OSK.757dcfbb72ad29e544507781746ef019&w=199&h=149&rs=2&qlt=80&o=6&cdv=1&pid=16.1"
		},
		{
		  id: 5,
		  title: "Arroz con pollo",
	  description: "Cocina el pollo con cebolla, ajo y especias hasta que esté tierno. Añade arroz, caldo de pollo y verduras. Cocina a fuego lento hasta que el arroz esté tierno y absorba los sabores. Sirve caliente, adornado con perejil fresco.",
		  imageUrl: "https://bing.com/th?id=OSK.f2d96dd998fcadffad924a969f9f3510"
		},
		{
		  id: 6,
		  title: "Empanadas",
		  description: "Rellena discos de masa con una mezcla deliciosa de carne molida, cebollas, pimientos y especias. Dobla la masa y sella los bordes. Hornea las empanadas hasta que estén doradas y crujientes",
		  imageUrl: "https://th.bing.com/th?id=OSK.HEROoq9__2_v71JCikMaHXVvFTOh1yVrbvadl_79_dp8HN0&w=280&h=165&c=15&rs=2&o=6&pid=SANGAM"
		},
		{
		  id: 7,
		  title: "Milanesa con pure",
		  description: "Cubre filetes de carne con migas de pan y huevo batido. Fríelos hasta que estén dorados y crujientes. Sirve las milanesas con un puré cremoso de papas. Acompaña con limón y una pizca de sal.",
		  imageUrl: "https://th.bing.com/th?id=OSK.2e02590da8a003f1acea35f777a37968&w=199&h=199&rs=2&qlt=80&o=6&cdv=1&pid=16.1"
		},
		{
		  id: 8,
		  title: "Ñoquis ",
		  description: "Mezcla puré de papas con harina hasta obtener una masa suave. Forma pequeños ñoquis y haz marcas con un tenedor. Cocina en agua hirviendo hasta que floten en la superficie. Sirve con tu salsa favorita y queso rallado",
		  imageUrl: "https://th.bing.com/th/id/OIP.CcpSO_fwtwtcIxEfiYeTLwHaFj?w=227&h=180&c=7&r=0&o=5&pid=1.7"
		},
		{
		  id: 9,
		  title: "Omelet",
		  description: "Bate huevos con sal y pimienta. Saltea champiñones en mantequilla hasta que estén tiernos. Vierte los huevos batidos sobre los champiñones y cocina a fuego lento hasta que cuaje. Dobla por la mitad y sirve caliente.",
		  imageUrl: "https://th.bing.com/th/id/OIP.0OuweUF9q5_cEOEQOhMZjgHaE8?w=274&h=183&c=7&r=0&o=5&pid=1.7"
		},
		{
		  id: 10,
		  title: "Asado",
		  description: "Sazona cortes de carne con sal y pimienta. Asa a la parrilla hasta que estén dorados por fuera y jugosos por dentro. Acompaña con chimichurri, una mezcla fresca de ajo, perejil, vinagre, aceite y especias. ",
		  imageUrl: "https://th.bing.com/th/id/OIP.LQhcFBcVhT5ydl2Ci8TRVAHaE8?w=290&h=193&c=7&r=0&o=5&pid=1.7"
		},
  ]);

  const agregarNuevaReceta = (nuevaReceta) => {
    setReceta([...receta, nuevaReceta]);
  };

  return (
    <Contexto.Provider value={{ receta, setReceta, agregarNuevaReceta }}>
      {children}
    </Contexto.Provider>
  );
}
