import React, { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import styles from './Main.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getDataError, getDataReq, getDataSuccess, } from './agumdata/action';
function Home() {
  const [loc, setLoc] = React.useState('');
  const [proprty, setProprty] = React.useState('');
  const [price, setPrice] = React.useState('');
  const { isLoading, isError, data } = useSelector((state) => state.alldata);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setLoc(event.target.value);
  };
  const handlePChange = (event) => {
    setProprty(event.target.value);
  };
  const handleRChange = (event) => {
    setPrice(event.target.value);
  };


  //const { id } = useParams();
  console.log(data)

  useEffect(() => {
    dispatch(getDataReq());
    fetch("http://localhost:3004/data")
      .then((res) => res.json())
      .then((data) => dispatch(getDataSuccess(data)))
      .catch(() => dispatch(getDataError()));

  }, [dispatch]);
  return (
    <div className={styles.Home}>
      <div className={styles.Box1}>
        <h1 className={styles.h1Heading}>Easy way to find the property according to your choice.</h1>
      </div>
      <div className={styles.Box1}>
        <p className={styles.p1Heading}>
          We provide various property models for you at affordable
          prices and the best quality
        </p>
      </div>
      <div className={styles.Box2}>

        <FormControl className={styles.formTag} sx={{ m: 1 }} variant="standard">
          <InputLabel id="demo-customized-select-label">Location</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={loc}
            onChange={handleChange}

          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Jharkhand"}>Jharkhand</MenuItem>
            <MenuItem value={"Delhi"}>Delhi</MenuItem>
            <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={styles.formTag} sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="demo-customized-select-native">Property type</InputLabel>
          <Select
            // className={styles.slectTag}
            id="demo-customized-select-native"
            value={proprty}
            onChange={handlePChange}

          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Minimist"}>Minimist</MenuItem>
            <MenuItem value={"Big"}>Big</MenuItem>
            <MenuItem value={"Mumbai"}>Mumbai</MenuItem>


          </Select>
        </FormControl>
        <FormControl className={styles.formTag} sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="demo-customized-select-native">Price Range</InputLabel>
          <Select
            id="demo-customized-select-native"
            value={price}
            onChange={handleRChange}

          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Rs2000000"}>Rs.2000000-Rs.3000000</MenuItem>
            <MenuItem value={"Rs4000000"}>Rs.4000000-Rs.5000000</MenuItem>

          </Select>
        </FormControl>
      </div>
      <div className={styles.Box3}>
        <div className={styles.Boxin}>
          <CheckCircleSharpIcon className={styles.Icons} />
          <p className={styles.p1Heading}>100% best quality guarantee</p>
        </div>

        <div className={styles.Boxin}>
          <CheckCircleSharpIcon className={styles.Icons} />
          <p className={styles.p1Heading}>More affordable price</p>
        </div>

      </div> 
      <h1 className={styles.propTags}>Our Property</h1>
      <p className={styles.pTags}>We provides various type of Properties for you with diffrent category</p>
      <div className={styles.flexDiv1}>
        <div>Popular</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.flexDiv}>

        {data.map((el, index) => (
          <div key={el.id} className={styles.flexedDiv}>
            <img className={styles.imgUrl} src={el.image_url} alt="" />
            <p className={styles.p1Tag}>
              Rs{el.cost}
            </p>
          </div>


        ))}
      </div>
    </div>

  );
}

export default Home;