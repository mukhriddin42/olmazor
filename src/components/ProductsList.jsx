import { Button, Tab, TabList, TabPanel, Tabs } from "@mui/joy"
import productPhoneImg from '../assets/images/product-phone.png'
import productCameraImg from '../assets/images/product-camera.png'
import { FavoriteBorderOutlined } from "@mui/icons-material"
import { useQuery } from "@tanstack/react-query"
import { fetchProducts } from "../api/products"


const ProductsList = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>Xatolik: {error.message}</h1>

    return (
        <div className='px-24 mt-16'>
            <Tabs aria-label="Basic tabs" defaultValue={0}>
                <TabList>
                    <Tab>New Arrival</Tab>
                    <Tab>Bestseller</Tab>
                    <Tab>Featured Products</Tab>
                </TabList>
                <TabPanel value={0}>
                    <div className=" flex gap-6 justify-self-start  flex-wrap">
                        {data.products.map((product) => (
                            <div key={product.id} className="main-shadow cursor-pointer rounded-md flex flex-col items-center py-4 px-6">
                                <div className="h-[18em]">
                                    <FavoriteBorderOutlined style={{ cursor: 'pointer' }} />
                                    <img className="w-[9em] mt-2" src={product.images[0]} alt="" />
                                    <p className="w-[11em] font-semibold text-center mt-2">{product.title}</p>
                                    <h3 className="font-bold text-2xl text-center my-2">${product.price}</h3>
                                </div>
                                <Button size="md" variant={'solid'} color="primary">
                                    Buy now
                                </Button>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel value={1}>
                    <div className=" flex gap-6 justify-self-start  flex-wrap">
                        <div className="border rounded-md flex flex-col items-center py-4 px-6">
                            <FavoriteBorderOutlined style={{ cursor: 'pointer' }} />
                            <img className="w-[9em] mt-2" src={productCameraImg} alt="" />
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

                        <div className="border rounded-md flex flex-col items-center py-4 px-6">
                            <FavoriteBorderOutlined style={{ cursor: 'pointer' }} />
                            <img className="w-[9em] mt-2" src={productCameraImg} alt="" />
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

                        <div className="border rounded-md flex flex-col items-center py-4 px-6">
                            <FavoriteBorderOutlined style={{ cursor: 'pointer' }} />
                            <img className="w-[9em] mt-2" src={productCameraImg} alt="" />
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
                </TabPanel>
                <TabPanel value={2}>
                    <div className=" flex gap-6 justify-self-start  flex-wrap">
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
                            <img className="w-[9em] mt-2" src={productPhoneImg} alt="" />
                            <p className="w-[11em] font-semibold text-center mt-2">Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                            <h3 className="font-bold text-2xl text-center my-2">$900</h3>
                            <Button size="md" variant={'solid'} color="primary">
                                Primary
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
                            <img className="w-[9em] mt-2" src={productPhoneImg} alt="" />
                            <p className="w-[11em] font-semibold text-center mt-2">Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                            <h3 className="font-bold text-2xl text-center my-2">$900</h3>
                            <Button size="md" variant={'solid'} color="primary">
                                Primary
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

                    </div>
                </TabPanel>
            </Tabs>

        </div>
    )
}

export default ProductsList