import './root.scss';
import stars from "../../assets/svg/stars.svg";
import light from "../../assets/svg/light.svg";
import { motion } from "framer-motion";
import { 
    Link,
    Outlet,
 } from "react-router-dom";

const Root = () => {

    const pathVariants = {
        hidden: {
            fill: "#f79748",
            pathLength: 0,
        },
        visible: {
            fill: "#fff1eb",
            stroke: "#fff1eb",
            pathLength: 1,
            transition: {
                type: "tween",
                duration: 6,
                ease: 'easeInOut',
                repeat: "Infinity",
                repeatDelay: 10,
                repeatType: "reverse",
            },
        },
    };

    return (
        <>
            <div className="nav">
                <Link to={'/'}>
                    <motion.svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="60px"
                        height="60px"
                        viewBox="0 0 1024 752"
                        enable-background="new 0 0 1024 752"
                        xml: space="preserve"
                    >
                        <motion.path
                            fill="#fff1eb"
                            stroke="#fff1eb"
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial="hidden"
                            animate="visible"
                            variants={pathVariants}
                            d="
                                M1.000000,458.454102 
                                    C7.036002,450.716370 15.054324,445.727692 22.483358,440.193756 
                                    C73.940483,401.862762 105.141907,349.700439 125.610352,290.166107 
                                    C134.064301,265.577026 133.646500,265.548645 129.302002,238.602249 
                                    C124.893715,211.260147 122.517250,183.713379 123.889801,155.995346 
                                    C124.531219,143.042221 125.783287,130.082550 130.490051,117.779350 
                                    C130.787598,117.001595 131.125992,116.239365 131.449615,115.471703 
                                    C135.048721,106.934250 140.598373,100.293381 150.487350,100.127457 
                                    C160.169128,99.965019 165.881256,106.443474 169.800461,114.496727 
                                    C175.275269,125.746460 177.605698,137.821777 178.228867,150.223480 
                                    C179.809280,181.675125 173.686325,212.194336 166.793427,242.605759 
                                    C165.763809,247.148468 165.004364,251.828018 163.323639,256.133423 
                                    C158.178574,269.313110 162.669006,282.109497 164.690735,294.885406 
                                    C171.786362,339.724915 180.679016,384.274994 186.371323,429.343475 
                                    C186.468842,430.115631 186.879715,430.848206 187.320206,432.098145 
                                    C190.906525,428.107697 192.682495,423.588623 194.961365,419.444427 
                                    C205.959137,399.444489 216.709457,379.308441 227.703949,359.306671 
                                    C229.870041,355.366028 230.743256,351.419342 230.738358,346.942780 
                                    C230.704483,315.945343 230.403427,284.938019 231.069702,253.952805 
                                    C231.774490,221.175156 233.110641,188.393524 237.693207,155.857986 
                                    C241.423218,129.375351 246.737534,103.302101 259.693848,79.521225 
                                    C267.462830,65.261490 277.422455,52.865311 292.531738,45.630150 
                                    C307.024506,38.690205 321.972351,42.504330 331.522034,55.490505 
                                    C340.744812,68.032173 344.098145,82.532822 345.255554,97.667885 
                                    C347.617462,128.553497 341.278198,158.278137 332.810120,187.676270 
                                    C320.309509,231.074142 301.687347,271.986877 281.831451,312.377838 
                                    C280.122589,315.854004 279.991730,318.576935 281.633850,322.131622 
                                    C289.545166,339.257355 295.282928,357.193329 300.172424,375.368774 
                                    C301.555969,380.511719 303.927002,382.968231 309.167084,383.492401 
                                    C323.462921,384.922485 336.994354,382.087799 350.191193,376.874847 
                                    C352.704865,375.881927 352.778076,374.340210 351.996429,372.108032 
                                    C349.849854,365.977966 347.841583,359.799377 345.792206,353.635468 
                                    C345.372070,352.371857 344.991730,351.094086 344.626251,349.813385 
                                    C342.505798,342.383087 344.152435,335.732208 349.011261,332.056213 
                                    C353.952850,328.317596 361.483307,328.331787 367.779480,332.553436 
                                    C374.696136,337.191010 381.576660,341.926697 388.101715,347.088898 
                                    C392.587250,350.637634 395.635468,350.104218 400.078949,346.565399 
                                    C442.820099,312.525879 478.145477,271.727295 509.897369,227.558853 
                                    C533.969727,194.072952 553.961914,158.079147 575.045410,122.749130 
                                    C581.787842,111.450661 588.447937,100.086533 596.424438,89.578934 
                                    C599.061707,86.104759 602.053955,82.980530 605.790222,80.668007 
                                    C615.006714,74.963455 626.129578,77.339119 632.125183,86.362259 
                                    C638.155212,95.437119 639.774170,105.783463 640.276855,116.347588 
                                    C641.547668,143.055191 636.768433,169.111069 631.091736,194.988037 
                                    C618.967712,250.253937 602.769836,304.252594 579.451965,355.933105 
                                    C574.864746,366.100006 569.682556,375.997894 564.818665,386.041107 
                                    C564.046204,387.636139 562.720642,389.079193 563.038635,391.096069 
                                    C564.629211,392.510223 566.543213,392.010040 568.302917,392.023071 
                                    C605.976807,392.302460 643.530701,390.099243 681.068481,387.038483 
                                    C718.573914,383.980316 755.979309,380.057373 793.202698,374.639221 
                                    C846.887207,366.825073 900.549316,358.756866 953.264404,345.591980 
                                    C963.932007,342.927948 974.337891,339.324799 984.160217,334.234253 
                                    C987.990234,332.249298 990.784546,329.775848 991.955566,325.183044 
                                    C993.659546,318.499786 998.839722,314.727631 1004.471130,314.979950 
                                    C1010.578979,315.253632 1014.841858,319.337036 1016.488098,326.402710 
                                    C1018.450073,334.823761 1015.668640,341.868195 1009.986206,347.883057 
                                    C1001.585571,356.775177 990.456665,361.046082 979.348450,365.141052 
                                    C955.332642,373.994415 930.214539,378.467102 905.188904,383.194519 
                                    C874.112366,389.064941 842.903564,394.175812 811.609497,398.760864 
                                    C783.278687,402.911804 754.872681,406.421356 726.394958,409.426819 
                                    C689.957581,413.272339 653.457336,416.294922 616.855591,417.799652 
                                    C594.561279,418.716248 572.236023,419.972412 549.917053,418.474060 
                                    C546.183899,418.223450 544.965637,420.452789 543.446899,422.811218 
                                    C532.680603,439.529846 520.753113,455.341827 506.411713,469.180237 
                                    C497.395264,477.880402 487.634552,485.653503 476.316223,491.281677 
                                    C451.719727,503.512756 427.063202,499.640106 407.474640,480.244202 
                                    C393.384766,466.292816 384.189209,449.091370 375.819031,431.426758 
                                    C371.685242,422.702789 368.042450,413.744751 364.242920,404.864655 
                                    C363.141724,402.291016 362.023224,400.597168 358.670929,401.953461 
                                    C343.982971,407.895905 328.727234,410.933594 312.824646,410.380188 
                                    C312.029633,410.352509 311.225159,410.596619 309.987122,410.778534 
                                    C310.154358,417.654999 312.366028,423.960754 313.673981,430.381134 
                                    C319.292969,457.963684 323.079926,485.768219 325.483551,513.823059 
                                    C327.536469,537.783875 327.946228,561.755920 327.125732,585.719727 
                                    C326.305878,609.663635 324.685455,633.616394 319.255707,657.078125 
                                    C316.995972,666.842285 314.167938,676.474792 306.963928,684.016357 
                                    C298.332062,693.052856 287.149231,693.122253 278.421875,684.144897 
                                    C271.144653,676.659180 267.444489,667.130127 263.814606,657.629883 
                                    C255.087967,634.790222 250.259644,610.981140 246.816269,586.879150 
                                    C241.493820,549.624512 238.173859,512.160278 235.651779,474.623077 
                                    C234.202209,453.048492 232.847046,431.467529 231.436127,409.684601 
                                    C229.843414,410.304413 229.431686,411.810852 228.759537,413.014801 
                                    C217.146439,433.815674 205.620728,454.665649 193.916351,475.414886 
                                    C191.932144,478.932434 191.437607,482.290863 191.725693,486.317596 
                                    C192.940277,503.294006 192.528824,520.303345 191.126068,537.247864 
                                    C188.807480,565.254883 183.036438,592.562073 173.116852,618.900757 
                                    C163.232986,645.144531 150.260056,669.604065 130.954376,690.307251 
                                    C125.925743,695.699951 120.455879,700.563232 113.949554,704.098083 
                                    C98.351959,712.571960 82.735222,705.943787 77.729454,688.923584 
                                    C74.725250,678.708984 75.468483,668.474426 77.250458,658.241089 
                                    C81.851166,631.820862 92.994171,607.799316 104.775620,584.038391 
                                    C122.398216,548.497070 141.711914,513.859436 161.531387,479.518005 
                                    C164.980637,473.541443 163.995529,467.950409 163.438385,462.221100 
                                    C158.942108,415.983276 150.800186,370.283356 142.691910,324.582825 
                                    C142.634918,324.261749 142.490891,323.956085 142.048294,322.616669 
                                    C140.920670,325.164215 140.075638,327.013977 139.278030,328.883972 
                                    C123.387383,366.139160 102.453224,400.172028 74.635994,429.774811 
                                    C60.846935,444.448944 44.582325,456.073395 27.934706,467.201599 
                                    C25.579782,468.775757 23.273024,470.424133 20.887835,471.950439 
                                    C13.007982,476.992706 7.051116,475.910858 1.237534,468.238831 
                                    C1.000000,464.969391 1.000000,461.938812 1.000000,458.454102 
                                M529.893921,245.352783 
                                    C498.126831,289.441895 462.507050,330.035309 419.833008,364.836182 
                                    C421.676239,365.868530 422.367706,366.324280 423.112366,366.663025 
                                    C456.131653,381.684174 490.970184,388.867645 527.028870,390.896790 
                                    C530.512390,391.092804 532.444946,389.867950 534.163818,386.859711 
                                    C544.094849,369.479248 552.708130,351.452362 560.540405,333.063995 
                                    C579.840759,287.751465 593.887451,240.752548 604.487061,192.724380 
                                    C609.827698,168.525375 614.720764,144.190201 613.851379,119.168037 
                                    C613.781372,117.152924 614.237366,114.985123 612.486633,112.361336 
                                    C606.705566,121.833069 601.137451,130.681351 595.837585,139.687469 
                                    C574.894165,175.277252 554.732483,211.351471 529.893921,245.352783 
                                M316.988190,137.703690 
                                    C319.549408,123.514069 319.682190,109.201744 318.450684,94.919746 
                                    C317.793579,87.298874 315.904510,79.800293 311.625214,73.200867 
                                    C308.538177,68.440094 306.106171,67.921715 301.234833,70.961662 
                                    C294.874298,74.930977 290.176666,80.527519 286.231384,86.768723 
                                    C272.630280,108.284790 267.972534,132.637405 264.352173,157.230255 
                                    C261.224915,178.473877 259.921539,199.894043 258.961945,221.343674 
                                    C257.987396,243.128235 257.234192,264.910767 257.202087,286.718414 
                                    C257.197388,289.915436 258.301636,291.786591 261.934204,291.952118 
                                    C262.575012,290.882507 263.341553,289.813049 263.897919,288.643555 
                                    C277.845398,259.326019 291.277466,229.783127 301.525421,198.922913 
                                    C308.079773,179.185547 313.980469,159.257965 316.988190,137.703690 
                                M300.701447,586.363403 
                                    C300.821381,567.888184 301.032379,549.431946 300.022797,530.948181 
                                    C297.894165,491.976532 291.908081,453.623016 283.513245,415.555878 
                                    C281.628571,407.009460 279.133484,399.887573 270.143311,396.495453 
                                    C267.143860,395.363678 264.742645,392.669861 262.028961,390.745178 
                                    C261.016266,390.026978 260.197540,388.659515 258.573700,389.409790 
                                    C257.668427,391.153290 258.100403,393.008728 258.128265,394.809601 
                                    C258.447876,415.445770 259.727661,436.032379 261.062622,456.624664 
                                    C263.709290,497.450012 267.156311,538.197327 272.376587,578.776733 
                                    C275.502014,603.072083 280.387329,626.990173 289.118835,649.984375 
                                    C289.796173,651.768066 290.021057,653.847412 292.585724,655.160767 
                                    C298.180176,632.698059 299.078278,609.966553 300.701447,586.363403 
                                M432.489807,399.168091 
                                    C421.047852,395.043121 409.821442,390.364166 399.282593,384.302643 
                                    C394.196198,381.377167 391.536591,385.231049 388.225800,387.167969 
                                    C384.918671,389.102753 387.562347,391.703125 388.389191,393.704651 
                                    C392.070923,402.616882 395.765625,411.540314 399.926544,420.234314 
                                    C406.754456,434.500885 413.782623,448.738464 424.998779,460.229614 
                                    C438.119965,473.672546 451.740479,475.367676 467.793030,465.704559 
                                    C486.893677,454.206635 500.785400,437.481262 513.495056,419.617554 
                                    C514.052368,418.834290 514.637207,417.915985 513.619385,416.563446 
                                    C486.349976,413.981750 459.310150,408.924896 432.489807,399.168091 
                                M134.462250,583.912903 
                                    C130.070480,592.878723 125.479568,601.753418 121.328979,610.829529 
                                    C113.018501,629.002075 105.096130,647.338867 102.744026,667.471252 
                                    C102.299644,671.274841 101.518936,675.167419 103.198227,679.053650 
                                    C132.663589,661.348206 168.497910,572.716675 164.379761,527.798340 
                                    C154.374084,546.571045 144.595367,564.917969 134.462250,583.912903 
                                M150.218048,178.918671 
                                    C150.218048,180.166702 150.218048,181.414734 150.218048,182.662781 
                                    C151.896866,171.915390 151.961578,161.137405 151.425812,150.343216 
                                    C149.826889,159.536865 150.418579,168.817429 150.218048,178.918671 
                                z"
                        />
                        <motion.path
                            fill="#fff1eb"
                            opacity="1.000000"
                            stroke="#fff1eb"
                            strokeWidth="20"
                            variants={pathVariants}
                            initial="hidden"
                            animate="visible"
                            d=" 
                                M169.479767,24.253529 
                                    C168.497803,36.431889 161.906082,44.639488 152.162811,50.369694 
                                    C146.152542,53.904472 139.380127,52.585709 134.145828,47.957947 
                                    C126.603638,41.289722 124.409004,27.735617 129.454453,19.065540 
                                    C132.090958,14.534992 135.944138,12.036097 141.251556,12.090939 
                                    C142.602432,12.104897 143.790390,12.054973 145.051971,11.362751 
                                    C159.464188,3.454874 168.122345,12.724188 169.479767,24.253529 
                                z"
                        />
                    </motion.svg>
                </Link>
                <div className="nav__links">
                    <Link to={'/aboutme'}>
                        <img className="svg nav__about-me" src={stars} alt="about-me link icon" />
                    </Link>
                    <Link to={'/projects'}>
                        <img className="nav__blog" src={light} alt="blog link icon" />
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Root