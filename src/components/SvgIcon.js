import Image from 'next/image';
import Dashboard from '../components/image/Combined Shape.svg';
import Imac from '../components/image/Imaces.svg';
import Blog from '../components/image/blog.svg';
import Touch from '../components/image/Touch.svg';
import Table from '../components/image/table.svg';
import Man from '../components/image/man.svg';
const SgvIcon = [
    <Image src={Dashboard} alt="dashboard" width={25} height={25} />,
    <Image src={Table} alt="Table" width={25} height={25} />,
    <Image src={Imac} alt="Imac" width={25} height={25} />,
    <Image src={Blog} alt="Blog" width={25} height={25} />,
    <Image src={Touch} alt="Touch" width={25} height={25} />,
    <Image src={Man} alt="Man" width={25} height={25} />,
]
export default SgvIcon;