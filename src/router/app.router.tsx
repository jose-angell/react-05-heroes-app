import { createBrowserRouter } from "react-router";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { SearchPage } from '../heroes/pages/search/SearchPage';
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layouts/AdminLayout";


export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HeroesLayout/>,
        children:[ 
        {
            index: true,
            element: <HomePage/>
        },
        {
            path: "hero/1",
            element: <HeroPage/>
        },
        {
            path: "search",
            element: <SearchPage/>
        },
        
        ]
    },
    {
        path: "/", //funciona igual que usar index: true y visersa
        element: <AdminLayout/>,
        children:[ 
        {
            path: "admin",
            element: <AdminPage/>
        },
    ]
    }
    
    
])