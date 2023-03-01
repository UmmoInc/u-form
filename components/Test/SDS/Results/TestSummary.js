import React from "react";
import { useState } from "react";

export default function TestSummary({ reports, user }) {
  console.log(reports);

  const selectedReport = reports.find(
    (report) => report.user_id === user.phone_number
  );

  const results = selectedReport.report;
  console.log(results);

  const sectionOne = results["SECTION I: ACTIVITIES"];
  const sectionTwo = results["SECTION II: COMPETENCIES"];
  const sectionThree = results["SECTION III: OCCUPATIONS"];
  const sectionFour = results["SECTION IV: RATE YOUR ABILITIES & SKILLS"];
  console.log(sectionFour);

  const [highest, setHighest] = useState("");

  const RealisticTotal =
    sectionOne["REALISTIC"] +
    sectionTwo["REALISTIC"] +
    sectionThree["REALISTIC"] +
    sectionFour["REALISTIC"];
  console.log(RealisticTotal);

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

  

  return (
    <div>
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
        <h1 className="flex justify-center items-center text-center">Highest Score</h1>
        <h1 className="flex justify-center items-center text-center">2nd Highest Score</h1>
        <h1 className="flex justify-center items-center text-center">3rd Highest Score</h1>
      
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
  );
}
