import NewsListItem from './new_list_item';

const NewsList = (props) =>{
    return (
        <>
        {/*This props.child comes from the NewList parent in the index.jsx */}
        <div>{props.children}</div> <hr />
            
            {props.news.map((item)=>(
               <NewsListItem key={item.id} item={item} />
            ))}
        </>
    )
}

export default NewsList; 