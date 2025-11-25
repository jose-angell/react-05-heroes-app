import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron 
      title="Busqueda de SuperHeroes"
      description="Descubre, explora y administra super heroes y villanos"
      />
      <CustomBreadcrumbs
        currentPage="Buscador de héroes"
        // breadcrumbs={[
        //   { label: 'Home1', to: '/' },
        //   { label: 'Home2', to: '/' },
        //   { label: 'Home3', to: '/' },
        // ]}
      />
      {/* Stats Dashboard */}
      <HeroStats/>

      {/* Filter and search */}
      <SearchControls />
    </>
  )
}
export default SearchPage;