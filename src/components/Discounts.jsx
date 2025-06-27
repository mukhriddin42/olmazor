import { FavoriteBorderOutlined } from '@mui/icons-material'
import productPhoneImg from '../assets/images/product-phone.png'
import productCameraImg from '../assets/images/product-camera.png'
import { Button } from '@mui/joy'

const Discounts = () => {
  return (
    <div className='px-24 py-20'>
      <h1 className='text-3xl'>Discounts up to -50%</h1>
      <div className=" flex gap-6 justify-self-start  flex-wrap mt-10">
        <div className="border rounded-md flex flex-col items-center py-4 px-6">
          <FavoriteBorderOutlined style={{ cursor: 'pointer' }} />
          <img className="w-[9em] mt-2" src={productCameraImg} alt="" />
          <p className="w-[11em] font-semibold text-center mt-2">Apple iPhone 14 Pro Max 128GB Deep Purple </p>
          <h3 className="font-bold text-2xl text-center my-2">$900</h3>
          <Button size="md" variant={'solid'} color="primary">
            Buy now
          </Button>
        </div>

        <div className="border rounded-md flex flex-col items-center py-4 px-6">
          <FavoriteBorderOutlined style={{ cursor: 'pointer' }} />
          <img className="w-[9em] mt-2" src={productPhoneImg} alt="" />
          <p className="w-[11em] font-semibold text-center mt-2">Apple iPhone 14 Pro Max 128GB Deep Purple </p>
          <h3 className="font-bold text-2xl text-center my-2">$900</h3>
          <Button size="md" variant={'solid'} color="primary">
            Buy now
          </Button>
        </div>

        <div className="border rounded-md flex flex-col items-center py-4 px-6">
          <FavoriteBorderOutlined style={{ cursor: 'pointer' }} />
          <img className="w-[9em] mt-2" src={productCameraImg} alt="" />
          <p className="w-[11em] font-semibold text-center mt-2">Apple iPhone 14 Pro Max 128GB Deep Purple </p>
          <h3 className="font-bold text-2xl text-center my-2">$900</h3>
          <Button size="md" variant={'solid'} color="primary">
            Buy now
          </Button>
        </div>

        <div className="border rounded-md flex flex-col items-center py-4 px-6">
          <FavoriteBorderOutlined style={{ cursor: 'pointer' }} />
          <img className="w-[9em] mt-2" src={productPhoneImg} alt="" />
          <p className="w-[11em] font-semibold text-center mt-2">Apple iPhone 14 Pro Max 128GB Deep Purple </p>
          <h3 className="font-bold text-2xl text-center my-2">$900</h3>
          <Button size="md" variant={'solid'} color="primary">
            Primary
          </Button>
        </div>

        <div className="border rounded-md flex flex-col items-center py-4 px-6">
          <FavoriteBorderOutlined style={{ cursor: 'pointer' }} />
          <img className="w-[9em] mt-2" src={productCameraImg} alt="" />
          <p className="w-[11em] font-semibold text-center mt-2">Apple iPhone 14 Pro Max 128GB Deep Purple </p>
          <h3 className="font-bold text-2xl text-center my-2">$900</h3>
          <Button size="md" variant={'solid'} color="primary">
            Primary
          </Button>
        </div>


      </div>
    </div>
  )
}

export default Discounts