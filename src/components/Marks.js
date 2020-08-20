import React, {useState, useEffect} from 'react'

function Marks () {

    const [leftOpen, setLeftOpen] = useState('closed');

    var change = false;

    const event = (e) => {
        setLeftOpen(e ? 'open' : 'closed');
        change = !change
    };

    return (
        <div id='down' className={leftOpen} >
              <div className='icon'
                   onClick={() => {
                        event(!change)}
                    } >
                   &equiv;
              </div>
              <div className={`sidebar ${leftOpen}`} >
                  <div className='header'>
                    <h3 className='title'>
                        Marks list
                    </h3>
                  </div>
                  <div className='content'>
                      <h3>Left content</h3>
                      <p>
                      Aenean ut felis finibus, aliquet mi a, feugiat felis. Donec porta, odio et vulputate laoreet, nibh odio iaculis mi, et ornare nulla orci vitae ligula. Sed mi velit, aliquam sit amet efficitur eget, scelerisque vel ligula. Aliquam finibus erat nec accumsan posuere. Vestibulum rhoncus, velit vitae volutpat vehicula, leo orci faucibus eros, at ornare nibh nunc nec mi. Donec porttitor ultricies mauris quis euismod. Praesent sem libero, venenatis ut ornare eget, volutpat tincidunt lacus. Pellentesque aliquam turpis et mauris consectetur, quis condimentum nunc dignissim. Cras lectus libero, pellentesque non malesuada at, condimentum nec ex. Nam sed accumsan enim. Donec eros massa, malesuada quis nulla elementum, imperdiet condimentum orci. Integer non velit et nulla vestibulum vestibulum. Proin vehicula tristique libero, eu tincidunt erat cursus ac. Ut malesuada ante ut est dictum, ornare varius arcu aliquet. Quisque vitae libero eget orci tristique aliquam id sit amet nunc.
                      
                      </p>
                  </div>
              </div>
          </div>
    )
}

export default Marks;