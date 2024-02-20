import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

i18n
 .use( LanguageDetector ).use(initReactI18next).init({

        debug:true,
        lng:"en",
        resources:{
            en:{
                translation:{
                logoname:"D-Farm",
                head1:"Home",
                head2:"Reading's",
                head3:"Sign up",
                hero1:"EMPOWER AGRICULTURE",
                par1:"What are you waiting for?",
                b1:"GET STARTED",
                b2:"JOIN US NOW",
                guide:"Check Out Our Features",
                card1:"Helps Optimize Irrugation Ensuring Crops Receive Right Amount Of Water",
                label1:"Soil Moisture",
                card2:"Helps Ensuring Efficient Water Use And Optimize Crops Growth",
                labels:"Real-Time Data Monitoring",
                card3:"Trigger Fire Alarm Allows Evacution To Minimize Damange",
                label3:"Smoke Detection",
                card4:"Delivers Precise Amounts Of Water And Reduce Wasteage",
                label4:"Automated Irrigation",
                card5:"Prevent Heat Build-Up And Improve Plant Health",
                label5:"Miniature Fans",
                title1:" Join the  newsletter to access our new features",
                title2:"You can unsubscribe at any time",
                sub:"Subscribe",
                divide:"About Us",
               
             }
            },
            hi:{
                translation:{
                logoname:"डी-फार्म",
                head1:"घर",
                head2:"पढ़ने का",
                head3:"साइन अप ",
                hero1:"कृषि को सशक्त बनाएं",
                par1:"आप किस का इंतजार कर रहे हैं?",
                b1:"शुरू हो जाओ",
                b2:"हमसे अभी जुड़ो",
                guide:"हमारी विशेषताएं देखें",
                card1:"सिंचाई को अनुकूलित करने में मदद करता है जिससे यह सुनिश्चित होता है कि फसलों को सही मात्रा में पानी मिले",
                label1:"मिट्टी की नमी",
                card2:"कुशल जल उपयोग सुनिश्चित करने और फसलों के विकास को अनुकूलित करने में मदद करता है",
                labels:"वास्तविक समय डेटा निगरानी",
                card3:"ट्रिगर फायर अलार्म विकास को नुकसान को कम करने की अनुमति देता है",
                label3:"धुएँ का पता लगाना",
                card4:"सटीक मात्रा में पानी उपलब्ध कराता है और बर्बादी कम करता है",
                label4:"स्वचालित सिंचाई",
                card5:"गर्मी को बढ़ने से रोकें और पौधों के स्वास्थ्य में सुधार करें",
                label5:"लघु पंखे",
                title1:"हमारी नई सुविधाओं तक पहुँचने के लिए न्यूज़लेटर से जुड़ें",
                title2:"आप किसी भी समय सदस्यता समाप्त कर सकते हैं।",
                sub:"सदस्यता लें",
                divide:"हमारे बारे में",

                
                }
            },
            mr:{
                translation:{
                logoname:"डी-फार्म",
                head1:"घर",
                head2:"वाचन",
                head3:"साइन अप ",
                hero1:"कृषी सक्षम करा",
                par1:"तू कशाची वाट बघतो आहेस?",
                b1:"सुरु करूया",
                b2:"आता आम्हाला सामील व्हा",
                guide:"आमची वैशिष्ट्ये तपासा",
                card1:"पिकांना योग्य प्रमाणात पाणी मिळेल याची खात्री करून सिंचन ऑप्टिमाइझ करण्यात मदत होते",
                label1:"माती ओलावा",
                card2:"पाण्याचा कार्यक्षम वापर सुनिश्चित करण्यात आणि पिकांच्या वाढीस अनुकूल करण्यात मदत करते",
                labels:"रिअल-टाइम डेटा मॉनिटरिंग",
                card3:"ट्रिगर फायर अलार्म उत्क्रांतीला नुकसान कमी करण्यास अनुमती देते",
                label3:"धूर शोधणे",
                card4:"अचूक प्रमाणात पाणी वितरीत करते आणि अपव्यय कमी करते",
                label4:"स्वयंचलित सिंचन",
                card5:"उष्णता निर्माण होण्यास प्रतिबंध करा आणि वनस्पतींचे आरोग्य सुधारा",
                label5:"सूक्ष्म चाहते",
                title1:"आमच्या नवीन वैशिष्ट्यांमध्ये प्रवेश करण्यासाठी वृत्तपत्रात सामील व्हा",
                title2:"तुम्ही कधीही सदस्यत्व रद्द करू शकता",
                sub:"सदस्यता घ्या",
                divide:"आमच्याबद्दल",

                }
            }
        }

 })