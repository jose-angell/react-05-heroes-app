
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { TabsContent } from "@radix-ui/react-tabs"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"
import { useMemo } from "react"

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //const [activeTab, setActiveTab] = useState<"all" | "favorites" | "heroes" | "villains"> ("all");
  const activeTab = searchParams.get('tab') ?? 'all';
  const selectTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);
  const {data: heroesResponse} = useQuery({
    queryKey:['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  // useEffect(() => {
  //   getHeroesByPage().then(() => {
      
  //   })
  // }, [])
return (
  <>
      <>
        {/* Header */}
        <CustomJumbotron 
        title="Universo de SuperHeroes"
        description="Descubre, explora y administra super heroes y villanos"
        />
        <CustomBreadcrumbs currentPage="Super Héroes" />
        {/* Stats Dashboard */}
        <HeroStats/>

        {/* Controls */}
        

        {/* Advanced Filters */}
        

        {/* Tabs */}
        <Tabs value={selectTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" 
            onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'all');
              return prev;
            })}
            >All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2" 
            onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'favorites');
              return prev;
            })}>
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'heroes');
              return prev;
            })}>Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'villains');
              return prev;
            })}>Villains (2)</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <h1>todos los personajes</h1>
            <HeroGrid heroes={heroesResponse?.heroes ?? []}/>
          </TabsContent>
          <TabsContent value="favorites">
            <h1>Favoritos</h1>
            <HeroGrid heroes={[]}/>
          </TabsContent>
          <TabsContent value="heroes">
            <h1>Heroes</h1>
            <HeroGrid heroes={[]}/>
          </TabsContent>
          <TabsContent value="villains">
            <h1>Villanos</h1>
            <HeroGrid heroes={[]}/>
          </TabsContent>
        </Tabs>

        {/* Character Grid */}
        {/* <HeroGrid/> */}

        {/* Pagination */}
       <CustomPagination totalPages={8}/>
      </>
    </>
  )
}

