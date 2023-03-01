import React from "react";
import { useState } from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Line,
  Font,
} from "@react-pdf/renderer";



export default function TestSummary({ reports, user, userData }) {
  console.log(userData);

  const selectedReport = reports.find(
    (report) => report.user_id === user.phone_number
  );

  const results = selectedReport.report;

  const sectionOne = results["SECTION I: ACTIVITIES"];
  const sectionTwo = results["SECTION II: COMPETENCIES"];
  const sectionThree = results["SECTION III: OCCUPATIONS"];
  const sectionFour = results["SECTION IV: RATE YOUR ABILITIES & SKILLS"];

  const [highest, setHighest] = useState("");

  const RealisticTotal =
    sectionOne["REALISTIC"] +
    sectionTwo["REALISTIC"] +
    sectionThree["REALISTIC"] +
    sectionFour["REALISTIC"];

  const InvestigativeTotal =
    sectionOne["INVESTIGATIVE"] +
    sectionTwo["INVESTIGATIVE"] +
    sectionThree["INVESTIGATIVE"] +
    sectionFour["INVESTIGATIVE"];

  const ArtisticTotal =
    sectionOne["ARTISTIC"] +
    sectionTwo["ARTISTIC"] +
    sectionThree["ARTISTIC"] +
    sectionFour["ARTISTIC"];

  const SocialTotal =
    sectionOne["SOCIAL"] +
    sectionTwo["SOCIAL"] +
    sectionThree["SOCIAL"] +
    sectionFour["SOCIAL"];

  const EnterprisingTotal =
    sectionOne["ENTERPRISING"] +
    sectionTwo["ENTERPRISING"] +
    sectionThree["ENTERPRISING"] +
    sectionFour["ENTERPRISING"];

  const ConventionalTotal =
    sectionOne["CONVENTIONAL"] +
    sectionTwo["CONVENTIONAL"] +
    sectionThree["CONVENTIONAL"] +
    sectionFour["CONVENTIONAL"];

  let categoryTotal = [
    { Total: RealisticTotal, Code: "R" },
    { Total: InvestigativeTotal, Code: "I" },
    { Total: ArtisticTotal, Code: "A" },
    { Total: SocialTotal, Code: "S" },
    { Total: EnterprisingTotal, Code: "E" },
    { Total: ConventionalTotal, Code: "C" },
  ];
  categoryTotal.sort(function (a, b) {
    if (a.Total > b.Total) return 1;
    if (a.Total < b.Total) return -1;
    return 0;
  });

  const highestScores = categoryTotal.slice(3, 6);

  console.log(highestScores[2]);
  console.log(highestScores[1]);
  console.log(highestScores[0]);

  const ref = React.createRef();

  const current = new Date();
  const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
  console.log(date);

  

  const styles = StyleSheet.create({
    page: {
      display: "flex",
      position: "relative",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    text: {
      position: "absolute",
      left: "0px",
      right: "0px",
      marginHorizontal: "auto",
      textAlign: "center",
      justifyContent: "center",
    },
    image: {
      objectFit: "cover",
     
    },
    badge: {
      position: "absolute",
      height: "100px",
      width: "100px",
      top: "10%",
      objectFit: "contain",
      //     marginHorizontal: 'auto',

      justifyContent: "center",
    },
  });

  const MyDoc = () => (
    <Document>
      <Page object-fit="fill" size="A4"  style={styles.page}>
        <View>
          <Image
            style={styles.image}
            src={
              "https://res.cloudinary.com/loooktrial/image/upload/v1677672651/SDS/SDS_Background-Certificate_o9kmed.png"
            }
          ></Image>
          
        </View>
     

        <Image
          style={styles.badge}
          src={
            "https://res.cloudinary.com/loooktrial/image/upload/v1677676805/SDS/63722248818_1_jqrycl.png"
          }
        />

        <Text
          style={{
            top: "25%",
            fontSize: "40px",
            fontWeight: "bold",
            ...styles.text,
          }}
        >
          SDS CERTIFICATE
        </Text>

        <Text
          style={{
            top: "32%",
            fontSize: "14px",
            fontWeight: "light",
            ...styles.text,
          }}
        >
          NATIONAL EMPLOYMENT
        </Text>
        <Text
          style={{
            top: "34%",
            fontSize: "14px",
            fontWeight: "light",
            ...styles.text,
          }}
        >
          SERVICES DEPARTMENT
        </Text>
        <Text
          style={{
            top: "37%",
            fontSize: "8px",
            fontWeight: "light",
            ...styles.text,
          }}
        >
          MEASUREMENT & TESTING UNIT
        </Text>
        <Text
          style={{
            top: "43%",
            fontSize: "10px",
            fontWeight: "light",
            ...styles.text,
          }}
        >
          PROUDLY PRESENTED TO
        </Text>
        <Text
          style={{
            top: "47%",
            fontSize: "32px",
            
            fontWeight: "light",
            ...styles.text,
          }}
        >
          {userData.first_name + " " + userData.last_name}
        </Text>
        <Text
          style={{
            top: "56%",
            fontSize: "10px",
            fontWeight: "light",
            ...styles.text,
            
            
          }}
        >
          For completing a Self-Directed Search Test on {date}{"\n"} 
        </Text>
        <Text
          style={{
            top: "62%",
            fontSize: "16px",
            fontWeight: "light",
            ...styles.text,
          }}
        >
         Your SDS Code:
        </Text>
        <Text
          style={{
            top: "65%",
            fontSize: "24px",
            fontWeight: "light",
            ...styles.text,
          }}
        >
         {highestScores[2].Code}-{highestScores[1].Code}-{highestScores[0].Code}
        </Text>
        <Text
          style={{
            top: "72%",
            fontSize: "12px",
            fontWeight: "light",
            ...styles.text,
          }}
        >
         Mr. Makhosini Mndawe
        </Text>
        <Text
          style={{
            top: "74%",
            fontSize: "6px",
            fontWeight: "light",
            ...styles.text,
          }}
        >
         Principal Secretary
        </Text>

        
      </Page>
    </Document>
  );

  return (
    <div>
      <div ref={ref}>
        <div className="grid grid-cols-7 grid-flow-row font-bold px-4 py-2 space-x-5">
          <h1></h1>
          <h1 className="flex justify-center items-center">R</h1>
          <h1 className="flex justify-center items-center">I</h1>
          <h1 className="flex justify-center items-center">A</h1>
          <h1 className="flex justify-center items-center">S</h1>
          <h1 className="flex justify-center items-center">E</h1>
          <h1 className="flex justify-center items-center">C</h1>
        </div>
        <div className="grid grid-cols-7 grid-flow-row font-medium px-4 text-xs py-2 space-x-5 bg-[#E6F3F9]">
          <div>
            <p className="whitespace-nowrap">Section I</p>
            <p>Activities</p>
          </div>
          <h1 className="flex justify-center items-center">
            {sectionOne["REALISTIC"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionOne["INVESTIGATIVE"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionOne["ARTISTIC"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionOne["SOCIAL"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionOne["ENTERPRISING"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionOne["CONVENTIONAL"]}
          </h1>
        </div>
        <div className="grid grid-cols-7 grid-flow-row font-medium px-4 text-xs py-2 space-x-5">
          <div>
            <p className="whitespace-nowrap">Section II</p>
            <p>Competencies</p>
          </div>
          <h1 className="flex justify-center items-center">
            {sectionTwo["REALISTIC"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionTwo["INVESTIGATIVE"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionTwo["ARTISTIC"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionTwo["SOCIAL"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionTwo["ENTERPRISING"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionTwo["CONVENTIONAL"]}
          </h1>
        </div>
        <div className="grid grid-cols-7 grid-flow-row font-medium px-4 text-xs py-2 space-x-5 bg-[#E6F3F9]">
          <div>
            <p className="whitespace-nowrap">Section III</p>
            <p>Occupations</p>
          </div>
          <h1 className="flex justify-center items-center">
            {sectionThree["REALISTIC"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionThree["INVESTIGATIVE"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionThree["ARTISTIC"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionThree["SOCIAL"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionThree["ENTERPRISING"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionThree["CONVENTIONAL"]}
          </h1>
        </div>

        <div className="grid grid-cols-7 grid-flow-row font-medium px-4 text-xs py-2 space-x-5 ">
          <div>
            <p className="whitespace-nowrap">Section IV</p>
            <p>Abiliities</p>
          </div>
          <h1 className="flex justify-center items-center">
            {sectionFour["REALISTIC"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionFour["INVESTIGATIVE"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionFour["ARTISTIC"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionFour["SOCIAL"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionFour["ENTERPRISING"]}
          </h1>
          <h1 className="flex justify-center items-center">
            {sectionFour["CONVENTIONAL"]}
          </h1>
        </div>
        <div className="grid grid-cols-7 grid-flow-row font-bold px-4 text-sm py-4 space-x-5 bg-[#E6F3F9]">
          <div>
            <p className="whitespace-nowrap">TOTAL</p>
          </div>
          <h1 className="flex justify-center items-center">{RealisticTotal}</h1>
          <h1 className="flex justify-center items-center">
            {InvestigativeTotal}
          </h1>
          <h1 className="flex justify-center items-center">{ArtisticTotal}</h1>
          <h1 className="flex justify-center items-center">{SocialTotal}</h1>
          <h1 className="flex justify-center items-center">
            {EnterprisingTotal}
          </h1>
          <h1 className="flex justify-center items-center">
            {ConventionalTotal}
          </h1>
        </div>
        <div>
          <p className="font-semibold w-full flex justify-center py-6">
            YOUR SDS CODE
          </p>
        </div>
        <div className="grid grid-cols-4 grid-flow-row font-medium text-xs md:text-base px-4 py-2 space-x-5">
          <h1></h1>
          <h1 className="flex justify-center items-center text-center">
            Highest Score
          </h1>
          <h1 className="flex justify-center items-center text-center">
            2nd Highest Score
          </h1>
          <h1 className="flex justify-center items-center text-center">
            3rd Highest Score
          </h1>
        </div>
        <div className="grid grid-cols-4 grid-flow-row font-bold px-4 text-sm py-4 space-x-5 bg-[#E6F3F9]">
          <div>
            <p className="whitespace-nowrap">CODE</p>
          </div>
          <h1 className="flex justify-center items-center">
            {highestScores[2].Code}
          </h1>
          <h1 className="flex justify-center items-center">
            {highestScores[1].Code}
          </h1>
          <h1 className="flex justify-center items-center">
            {highestScores[0].Code}
          </h1>
        </div>
      </div>
      <div className="py-8">
        <div className="App">
          <div className="App">
            <PDFDownloadLink document={<MyDoc />} fileName="sds_certificate.pdf">
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download now!"
              }
            </PDFDownloadLink>
          </div>
        </div>
      </div>
    </div>
  );
}
