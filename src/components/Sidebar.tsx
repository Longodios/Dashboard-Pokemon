import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from "react-icons/io5";
import {SidebarMenuItem} from "./SidebarMenuItem";
import XLD from "../XLD_Fotografía.jpg";


const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subtitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subtitle: "Contador Client Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subtitle: "Generación Estática",
  },
];


export const Sidebar = () => {
  return (
    <div
      style={{ width: "400px" }}
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center  text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              width={50}
              height={50}
              className="rounded-full"
              src={XLD}
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">Xavier Longo</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">

        {
            menuItems.map((item) => (
                <SidebarMenuItem key={item.path} path={item.path} icon={item.icon} title={item.title} subtitle={item.subtitle} />
            ))
        }


      
         
            
         

        
          
      </div>
    </div>
  );
};

export default Sidebar;
