"use client"
import { motion } from "motion/react"
import Image from 'next/image';

function Page() {
    return (
        <main className="bg-gradient-to-b from-amber-100 to-green-600">
            <div className="flex flex-row-reverse items-center justify-center ">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}   // starting state
                    animate={{ opacity: 1, x: 0 }}    // end state
                    transition={{ duration: 1, ease: "easeOut" }} // timing
                    className="text-3xl flex flex-col items-center justify-center text-center gap-y-20 w-1/2">
                    <span className="text-6xl font-semibold"> ❓ لماذا نتعلم القرآن </span>
                    <span className="text-4xl flex-wrap w-2/3">
                        القرآن ليس كتابًا عاديًا، بل هو رسالة خالدة تحمل معاني الرحمة، الحكمة، والسكينة. تعلمه يفتح أبواب الفهم العميق ويقوي الصلة بالله تعالى
                    </span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}   // starting state
                    animate={{ opacity: 1, y: 0 }}    // end state
                    transition={{ duration: 1, ease: "easeIn" }} // timing
                >
                    <Image
                        src="/IslamicBoy.png"
                        alt="Quran"
                        width={800}
                        height={800}
                    />
                </motion.div>
            </div>
            <div className="flex flex-row items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}   // starting state
                    animate={{ opacity: 1, x: 0 }}    // end state
                    transition={{ duration: 1, ease: "easeOut" }} // timing
                    className="text-3xl flex flex-col items-center justify-center text-center gap-y-20 w-1/2">
                    <span className="text-6xl font-semibold"> 🤲 الفوائد الروحية لتعلم القرآن
                    </span>
                    <span className="text-4xl flex-wrap w-auto">
                        <div>
                            طمأنينة القلب: يزرع السكينة ويخفف القلق

                        </div>
                        <div>
                            قوة الإيمان: يعزز الصبر، اليقين، والتقوى

                        </div>
                        <div>
                            صفاء الروح: يطهّر النفس من الشوائب ويقوي الإرادة

                        </div>
                        <div>
                            الهداية العملية: يقدم قيمًا وأخلاقًا تُرشد حياتنا اليومية

                        </div>
                    </span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}   // starting state
                    animate={{ opacity: 1, y: 0 }}    // end state
                    transition={{ duration: 1, ease: "easeIn" }} // timing
                >
                    <Image
                        src="/IslamicGirl.png"
                        alt="Quran"
                        width={800}
                        height={800}
                    />
                </motion.div>
            </div >
            <div className="flex flex-row-reverse items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}   // starting state
                    animate={{ opacity: 1, x: 0 }}    // end state
                    transition={{ duration: 1, ease: "easeOut" }} // timing
                    className="text-3xl flex flex-col items-center justify-center text-center gap-y-20 w-1/2">
                    <span className="text-6xl font-semibold"> 🌐 مميزات التصميم الحديث
                    </span>
                    <div className="text-4xl flex-wrap w-auto flex flex-col list-inside">
                        <div >
                            واجهة أنيقة: ألوان هادئة وخطوط واضحة لراحة العين

                        </div>
                        <div>
                            تجربة تفاعلية: وحدات تعليمية، مقاطع صوتية، ورسوم بيانية

                        </div>
                        <div>
                            تخصيص شخصي: متابعة التقدّم، تحديد أهداف، والاحتفاء بالإنجازات
                        </div>
                        <div>
                            مرونة الاستخدام: متوافق مع الحاسوب والهاتف لتعلّم في أي وقت ومكان
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}   // starting state
                    animate={{ opacity: 1, y: 0 }}    // end state
                    transition={{ duration: 1, ease: "easeIn" }} // timing
                >
                    <Image
                        src="/ModernDesign.png" // path relative to public folder
                        alt="Quran"
                        width={800}
                        height={800}
                    />
                </motion.div>
            </div >
        </main>

    )
}

export default Page