import { SectionText } from '../types';

interface FeatureProps {
  data: SectionText;
}

export function Feature({ data }: FeatureProps) {
  return (
    <div className="section p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 h-full flex flex-col justify-center bg-background">
      <div className="content-title">{data.title}</div>

      <h2 className="content-heading">{data.tagline}</h2>

      <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-3.5 lg:space-y-4">
        {data.description.map((paragraph, index) => (
          <p key={index} className="content-description">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex justify-center md:justify-end mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8">
        <button className="content-button">{data.cta}</button>
      </div>
    </div>
  );
}
