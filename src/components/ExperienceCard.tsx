import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

interface ExperienceCardProps {
  logo?: string;
  companyName: string;
  jobTitle: string;
  bulletPoints: string[];
}

function ExperienceCard({ logo, companyName, jobTitle, bulletPoints }: ExperienceCardProps) {
  return (
    <Card className="w-full h-full">
      <CardHeader className="text-center pb-4">
        {/* Company Logo */}
        {logo ? (
          <img
            src={logo}
            alt={`${companyName} logo`}
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
        ) : (
          <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400 text-sm">Logo</span>
          </div>
        )}
        
        <CardTitle className="text-xl font-bold mb-2">
          {companyName}
        </CardTitle>
        
        <CardDescription className="text-base">
          {jobTitle}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {/* Bullet Points */}
        <ul className="space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2 mt-0.5">•</span>
              <span className="text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
