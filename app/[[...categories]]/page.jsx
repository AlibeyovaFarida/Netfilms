import HomeContainer from "../../containers/home";
import {getTopRatedMovies,
  getPopularMovies,
  getAllCategories,
  getSingleCategory} from '@/services/movie'

async function HomePage({ params }) {
  //? 1-ci usul
  // const [topRatedResponse, popularResponse] = await Promise.all([
  //   getTopRatedMovies(),
  //   getPopularMovies()
  // ]);
  // const { results: topRatedMovies } = topRatedResponse;
  // const { results: popularMovies } = popularResponse;
  //todo ////////////////////////////////////////////////////////////
  //? 2-ci usul
  const topRatedPromise = getTopRatedMovies();
  const popularPromise = getPopularMovies();
  const categoryPromise = getAllCategories()
  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([topRatedPromise, popularPromise, categoryPromise]);
  // console.log(categories);
  //todo ////////////////////////////////////////////////////////////

  let selectedCategory;
  if (params.categories?.length > 0) {
    const { results } = await getSingleCategory(params.categories[0])
    selectedCategory = results
  }
  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.categories?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
}

export default HomePage;