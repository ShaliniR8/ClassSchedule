import useJsonQuery from "../utilities/fetch"
import Banner from "./Banner";
import TermPage from './TermPage';

const Main = ({data}) => {
  
  return (
    <>
      <Banner title = {data.title} />
      <TermPage courses={data.courses} />;
    </>
  )
}

export default Main;