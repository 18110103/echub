import Grab from '../assets/partner/grab.png'
import GHN from '../assets/partner/ghn.png'
import GHTK from '../assets/partner/ghtk.png'

export default function getBrandImage(brand, className, style) {
    if (brand.toString().toLowerCase().includes('grab')) {
        return <img src={Grab} alt="grab" style={style} className={className} />
    }
    if (brand.toLowerCase().includes('ghn')) {
        return <img src={GHN} alt="ghn" style={style} className={className} />
    }
    if (brand.toLowerCase().includes('ghtk')) {
        return <img src={GHTK} alt="ghtk" style={style} className={className} />
    }
}