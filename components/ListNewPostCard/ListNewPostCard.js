import Grid from '@material-ui/core/Grid';
import NewPostCard from '../Posts/NewPostCard';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import usePagination from '../Pagination/Pagination';


const useStyles = makeStyles(() => ({
  gridItem: {
    padding: '0 0px',
    marginBottom: '24px',
  },
}));

const ListNewPostCard = (props) => {
  const { postCards } = props;
  const classes = useStyles();

  let [page, setPage] = useState(1);
  const PER_PAGE_POSTS = postCards.size;
  const count = Math.ceil(postCards.total / PER_PAGE_POSTS);
  let _DATA_POSTS = usePagination(postCards.data, PER_PAGE_POSTS)
  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA_POSTS.jump(p);
  };
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container spacing={7}>
          {_DATA_POSTS && postCards.data && postCards.data.length > 0 ? (_DATA_POSTS.currentData().map((element,index) => {
            return (
              <Grid item sm={6} md={4} className={classes.gridItem}>
                <NewPostCard postCards={element} />
              </Grid>
            );
          })) : (
            <div>No PostCard Display</div>
          )}
        </Grid>
      </Grid>
      <Grid item>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Pagination
            count={count}
            size="large"
            page={page}
            onChange={handleChangePage}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default ListNewPostCard;
