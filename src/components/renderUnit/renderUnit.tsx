export const RenderUnit = (imageUrl: string, count: number) => {

    return (
        <div className='unit d-flex flex-column'>
            <div><img style={{height: '65px'}} src={imageUrl} /></div>
            <div className="unitCount">{count}</div>
        </div>
    )
}