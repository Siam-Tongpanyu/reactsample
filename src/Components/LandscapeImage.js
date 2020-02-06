import React, {useState} from 'react';
import axios from 'axios';
import {GridList, GridListTile, GridListTileBar, IconButton} from '@material-ui/core';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

const LandscapeImage = (props)=>{
  const searchText = props.searchText || 'landscape';
  const amount = props.amount || 15;
  const [pixabay, setPixabay] = useState({
    searchText: searchText,
    amount: amount,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '15137693-6b4642d5f2e2638116bd01fe1',  
    called: false,
    images: []
   });

  const callLanscape = () =>{
    return axios
      .get(
        `${pixabay.apiUrl}/?key=${pixabay.apiKey}&q=${pixabay.searchText}&image_type=photo&per_page=${pixabay.amount}&safesearch=true`
      )
      .then(pixaData => {
        if (pixaData.data.hits) {
          setPixabay({ images: pixaData.data.hits, called: true });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  let pixaLand;
  let landImages = '';
  if((!pixabay.called) && (pixabay.images.length === 0)){
    callLanscape();
  }
  else{
    pixaLand = pixabay.images;
  } 
if (pixaLand && pixaLand.length > 0){
  landImages = (
    <GridList cols={3}>
      {pixaLand.map(img => (
        <GridListTile title={img.tags} key={img.id}>
          <img src={img.largeImageURL} alt={img.tags} />
          <GridListTileBar
            title={img.tags}
            subtitle={
              <span>
                by <strong>{img.user}</strong>
              </span>
            }
            actionIcon={
              <IconButton
                aria-label={`info about ${img.tags}`}
                onClick={() => props.handleOpen(img.largeImageURL, img.tags)}
              >
                <ZoomInIcon htmlColor="white" />
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  );
}

return <div>{landImages}</div>;
}

export default LandscapeImage;
