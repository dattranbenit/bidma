import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { fetchError } from '../../../redux/actions';
import PageLoader from '../PageComponents/PageLoader';

export const NotificationLoader = ({ loading, error, message }) => {
  return (
    <React.Fragment>
      {loading && <PageLoader />}
      {error && <Snackbar open={Boolean(error)} message={error} />}
      {message && <Snackbar open={Boolean(error)} message={message} />}
    </React.Fragment>
  );
};

const ContentLoader = () => {
  const { error, loading, message } = useSelector(({ common }) => common);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error || message) {
      setTimeout(() => {
        dispatch(fetchError(''));
      }, 3000);
    }
  }, [dispatch, error, message]);

  return <NotificationLoader loading={loading} error={error} message={message} />;
};

export default ContentLoader;
