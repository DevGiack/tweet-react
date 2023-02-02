function Tweet({id, name, content, like, onDelete, onLike}) {



        return(
        <div className="tweet">
                <button onClick={() => onDelete(id)} className="delete">X</button>
                <h3>{name}</h3>
                <p>{content}</p>
                <button onClick={() => onLike(id)}>{like} likes</button>
        </div>
        )
}

export default Tweet