import CartCounter from "@/components/CartCounter";









export const metadata = {
 title: 'Carrito de compras',
 description: 'Contador de productos y precio total del carrito',
 keywords: ['Carrito , Productos, Compras , Precio , Barato']
};


export default function CounterPage() {

  

  return (
   
      <div className="flex flex-col items-center justify-center w-full h-full">
     
        <span>Productos en el carrito</span>
        
        <CartCounter />
       
      </div>
   
  );
}
