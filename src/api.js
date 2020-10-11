import axios from 'axios'


export const fetchPopular = async(page)=>{
    const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=1a76b99206589ba102dde14b37454e24&page=${page}`  

    try{
    const data = await axios.get(urlPopular)
    return data
    }
    catch(err){
        console.log(err)
    }
}

export const fetchTv = async(page)=>{
    const urltv = `https://api.themoviedb.org/3/tv/popular?api_key=1a76b99206589ba102dde14b37454e24&page=${page}`
    try{
        const data = await axios.get(urltv)
        return data
        }
        catch(err){
            console.log(err)
        }   
}

export const fetchPeople = async(page)=>{
    const urlpeople = `https://api.themoviedb.org/3/person/popular?api_key=1a76b99206589ba102dde14b37454e24&language=en-US&page=${page}`
    try{
        const data = await axios.get(urlpeople)
        return data
        }
        catch(err){
            console.log(err)
        } 
}


export const fetchTrending = async(page)=>{
    const urlTrending = `https://api.themoviedb.org/3/trending/all/day?api_key=1a76b99206589ba102dde14b37454e24&page=${page}`
    try{
        const data = await axios.get(urlTrending)
        return data
    }
    catch(err){
        console.log(err)
    }
}

export const fetchCreditsMovie = async(id)=>{
    const url  = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=1a76b99206589ba102dde14b37454e24`
    try{
        const data = await axios.get(url)
        return data
    }
    catch(err){
        console.log(err)
    }
}
export const fetchCreditsTv = async (id)=>{
    const url  = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=1a76b99206589ba102dde14b37454e24`
    try{
        const data = await axios.get(url)
        return data
    }
    catch(err){
        console.log(err)
    }
}

export const fetchMovieDetails = async(id)=>{
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=1a76b99206589ba102dde14b37454e24`
    try{
        const data = await axios.get(url)
        return data

    }
    catch(err){
        console.log(err)
    }
}
export const fetchTvDetails = async(id)=>{
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=1a76b99206589ba102dde14b37454e24`
    try{
        const data = await axios.get(url)
        return data

    }
    catch(err){
        console.log(err)
    }
}

export const fetchSearch= async(query)=>{
    const url = `https://api.themoviedb.org/3/search/multi?api_key=1a76b99206589ba102dde14b37454e24&query=${query}&page=1`
    try{
        const data = await axios.get(url)
        return data
    }
    catch(err){
        console.log(err)
    }
}