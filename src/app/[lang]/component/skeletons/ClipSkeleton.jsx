

export default function ClipSkeleton({length}) {

    const array = Array(length).fill('');

    console.log(array)

    return (
        <>
        {
             array.map((item,index)=>{
                return (  
                    <>
                                        {/* <div _nghost-ng-c734340672="">
                    <div className="cu-clip-card__content">
                      <div
                        className="cu-clip-card__link relative overflow-hidden back-skeleton"
                      >
                      </div>
                    </div>
            
                    <div className="cu-clip-card__footer">
                      <div className="cu-clip-card__editable-title back-skeleton overflow-hidden">
                      <div
                            className="cu-clip-card__title"
                          >
                          </div>
                      </div>
            
                      <span className="cu-clip-card__date relative min-h-5 w-2/5 back-skeleton overflow-hidden"></span>
                    </div>
                  </div>  */}

                  <div _nghost-ng-c711805542="">

                    <div className="content-clip-skeleton">

                    </div>

                    <div className="footer-clip-skeleton ">
                        <div className="footer-clip-skeleton-row footer-clip-skeleton-row-title">
                            <div className="footer-clip-skeleton-row-item"></div>
                            <div className="footer-clip-skeleton-row-item"></div>
                        </div>

                        <div className="footer-clip-skeleton-row footer-clip-skeleton-row-date">
                            <div className="footer-clip-skeleton-row-item"></div>
                            <div className="footer-clip-skeleton-row-item"></div>
                        </div>

                    </div>

                  </div>

                    </>


                 )
            })
        }
        </>
    )

}