import React,{useEffect,useState} from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {

    const [articles,setarticles]=useState([]);
    const [loading,setloading]=useState(true);
    const [page,setpage]=useState(1);
    const [totalresults,settotalresults]=useState(0);
    
    

    const updatenews = async () => {
        props.setprogress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f59364c6a0f7455cbfd21c5525a058d0&page=${page}&pageSize=${props.pagesize}`;
        setloading(true);
        let data = await fetch(url);
        props.setprogress(30);
        let parseddata = await data.json();
        props.setprogress(70);
        setarticles(parseddata.articles);
        settotalresults(parseddata.totalresults);
        setloading(false);
        props.setprogress(100);
    }

    useEffect(()=>{
        updatenews();
        document.title=`${props.category} - NewsMonkey`;
    },[])


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f59364c6a0f7455cbfd21c5525a058d0&page=${page+1}&pageSize=${props.pagesize}`;
        setpage(page+1);
        setloading(true);
        let data = await fetch(url);
        let parseddata = await data.json();
        setloading(false);
        settotalresults(parseddata.totalresults);
        setarticles(articles.concat(parseddata.articles));
      };

        return (
            <>
                <h1 className='text-center' style={{marginTop:'90px'}}>{props.title} from {props.category}</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalresults}
                    loader={<Spinner/>}
                    >
                    <div className='container'>
                    <div className='row my-3'>
                        {articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <Newsitems title={element.title ? element.title.slice(0, 50) : "No-Title"} description={element.description ? element.description.slice(0, 100) : "No-Description"} imageurl={element.urlToImage ? element.urlToImage : "https://images.squarespace-cdn.com/content/v1/5d2ce5f963185f0001cf1271/944adaeb-b231-4465-be12-3922f063c99b/new_monkey_4.jpg?format=750w"} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
                
                {/* <div className='container d-flex justify-content-between'>
                    <button disabled={page <= 1} type="button" class="btn btn-dark" onClick={this.handleprevious}>&larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalresults / props.pagesize)} type="button" class="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>
                </div> */}
            </>
        )
}

News.defaultProps = {
    country: 'in',
    pagesize: 20,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}

export default News;