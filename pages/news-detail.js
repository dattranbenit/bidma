import React, { useState } from 'react';

//Material UI Cores
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import newDetail from '../public/images/new-detail.png';
import procedureNew from '../public/images/procedure-new.png';

const useStyles = makeStyles(() => ({
  imgNewDetail: {
    width: '100%',
  },
  pageContainer: {
    maxWidth: '80%',
    backgroundColor: '#fff',
    borderRadius: '5px',
  },
  contentNew: {
    display: 'flex',
    flexDirection: 'column',
    '& h2': {
      fontSize: '25px',
      fontWeight: '700',
      padding: ' 20px  ',
    },
    '& p ': {
      fontSize: '14px',
      fontWeight: '400',
      padding: ' 20px 20px 0px 23px ',
    },
  },
  imgProcedure: {
    marginTop: '47px',
    width: '100%',
    '& img': {
      width: '100%',
    },
  },
}));

const NewDetail = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <Grid>
        <img src={newDetail} className={classes.imgNewDetail} />
      </Grid>
      <Grid container className={classes.contentNew}>
        <h2>QUY TRÌNH TÌM MÁY TRONG PHIÊN ĐẤU THẦU VÀ ĐẶT HÀNG</h2>
        <p>
          Danh sách các phiên đấu cùng hình ảnh luôn được cập nhật lên web site, fanpage của chúng tôi, giá khởi điểm sẽ được
          gửi đến các khách hàng có đăng ký.
        </p>
        <p>Làm sao để tham ra phiên đấu của chúng tôi.</p>
        <p>Để tham ra đấu, Khách hàng cần đặt cọc bằng chuyển khoản ít nhất 30% giá trị mà mình dự kiến đấu.</p>
        <p>
          Khi phiên đấu thầu diễn ra, Khách hàng có thể ủy quyền (bằng văn bản) cho tongkhomaycongtrinh.com &
          daugiamaycongtrinh.com đấu hộ hoặc cùng đấu thầu online với chúng tôi.
        </p>
        <p>Ngay sau khi kết thúc phiên đấu.</p>
        <p>
          Nếu Khách hàng trúng thầu, thì trong vòng 03 ngày làm việc, Khách hàng có trách nhiệm chuyển nốt số tiền còn lại
          theo tỷ giá bán ra của ngân hàng Ngoại Thương Việt Nam tại thời điểm chuyển tiền.
        </p>
        <p>
          Nếu Khách hàng không trúng thầu, số tiền đặt cọc sẽ được chuyển khoản trả lại Khách hàng trong vòng 01 ngày làm
          việc. Tuy nhiên, nếu Khách hàng muốn tham ra đấu các phiên kế tiếp , Khách hàng có thể để lại số tiền nêu trên phục
          vụ cho việc đấu tương lai.
        </p>
        <p>Thời gian giao hàng: Trong vòng 30 ngày với các điều kiện bình thường.</p>
      </Grid>
      <Grid className={classes.imgProcedure}>
        <img src={procedureNew} />
      </Grid>
    </div>
  );
};

export default NewDetail;
