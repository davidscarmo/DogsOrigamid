import React from 'react'

// hook to identify if the screen matchs with of the mediaquery by passing the value 
const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() =>{
    const changeMatch = () => {
      const {matches} = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    }
  }, [media]);
  return match; 
}

export default useMedia
