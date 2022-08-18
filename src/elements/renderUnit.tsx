type PropTypes = {
    imageUrl: string, 
    count: number
}

export const RenderUnit = ({imageUrl, count}: PropTypes) => {
    return (
        <div className='unit d-flex flex-column'>
            <div><img style={{height: '65px'}} src={imageUrl} alt = ""/></div>
            <div className="unitCount">{count}</div>
        </div>
    );
}