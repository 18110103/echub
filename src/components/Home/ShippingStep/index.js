import { useState } from "react"
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Step1 from '../../../assets/ShippingSteps/step1.png'
import Step2 from '../../../assets/ShippingSteps/step2.png'
import Step3 from '../../../assets/ShippingSteps/step3.png'
import Step4 from '../../../assets/ShippingSteps/step4.png'

const Button = (props) => <button className={`${props.active ? "text-white bg-blue-500" : "text-blue-500"} transition-all duration-500 bg-left-bottom bg-200% select-none rounded-full w-10 h-10  md:w-14 md:h-14 md:text-xl font-medium border-2 border-blue-500`} {...props}>{props.children}</button>
const Divider = () => <div className="w-12 md:w-16 h-0.5 bg-blue-500" />
const ContentContainer = (props) => <div className="h-60 container max-w-4xl mx-auto px-5 flex flex-col md:flex-row justify-center font-medium text-gray-600 text-xl items-center md:h-64" {...props}>{props.children}</div>
const Content = (props) => <div className="flex-center h-full w-1/2 mr-5 text-base sm:text-lg text-center mb-3 md:mb-0" {...props}>{props.children}</div>

const ShippingStep = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const steps = 4
    return <div className="my-7">
        <div className="text-center my-8 text-gray-700 text-xl font-bold px-4">GỬI HÀNG NHANH CHỈ VÀI THAO TÁC ĐƠN GIẢN</div>
        <div className="mx-auto flex w-max items-center">
            {[...Array(steps).keys()].map(v => {
                let i = v + 1
                return <>
                    <Button onClick={() => setCurrentStep(i)} active={currentStep === i}>{i}</Button>
                    {i !== steps && <Divider />}
                </>
            })}
        </div>
        <div className="my-16">
            <SwitchTransition mode="out-in">
                <CSSTransition key={currentStep}
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}
                    classNames="fade">
                    <ContentContainer>
                        {currentStep === 1 && (<>
                            <Content>TẠO ĐƠN HÀNG TRÊN HỆ THỐNG</Content>
                            <Content>
                                <img className="h-full w-auto block mx-auto" src={Step1} alt="Step 1" />
                            </Content>
                        </>
                        )}
                        {currentStep === 2 && (<>
                            <Content>THANH TOÁN ĐƠN HÀNG THÔNG QUA PAYPAL</Content>
                            <Content>
                                <img className="h-full w-auto block mx-auto" src={Step2} alt="Step 2" />
                            </Content>
                        </>
                        )}
                        {currentStep === 3 && (<>
                            <Content>CHỜ ĐƠN HÀNG ĐƯỢC VẬN CHUYỂN ĐẾN NƠI NHẬN</Content>
                            <Content>
                                <img className="h-full w-auto block mx-auto" src={Step3} alt="Step 3" />
                            </Content>
                        </>
                        )}
                        {currentStep === 4 && (<>
                            <Content>ĐƠN HÀNG ĐƯỢC GỬI THÀNH CÔNG ĐẾN NGƯỜI NHẬN NHANH CHÓNG</Content>
                            <Content>
                                <img className="h-full w-auto block mx-auto" src={Step4} alt="Step 4" />
                            </Content>
                        </>
                        )}
                    </ContentContainer>
                </CSSTransition>
            </SwitchTransition>
        </div>
    </div >
}

export default ShippingStep