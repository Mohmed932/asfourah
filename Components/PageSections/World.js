"use client";
import { Suspense, useState, useEffect } from "react";
import Allpage from "./Allpage";
import { useDispatch, useSelector } from "react-redux";
import { loadMoreDataWorld } from "../../redux/World";

const World = ({ news }) => {
  const title = "عالم";
  const { loading, newsData, error } = useSelector(
    (state) => state.SectionWorldNewsData
  );
  const [page, setPage] = useState(1);
  const [data, setData] = useState(news || []);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page > 1) {
      dispatch(loadMoreDataWorld(page));
    }
  }, [page, dispatch]);

  useEffect(() => {
    if (newsData && newsData.length > 0) {
      setData((prevData) => [...prevData, ...newsData]);
    }
  }, [newsData]);

  const handeLoadMore = () => {
    console.log(data);
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <Suspense>
      <Allpage
        title={title}
        news={data}
        handeLoadMore={handeLoadMore}
        loading={loading}
        error={error}
      />
    </Suspense>
  );
};

export default World;
