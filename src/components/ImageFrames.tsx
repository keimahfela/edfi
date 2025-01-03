import { Frown, Smile } from 'lucide-react';
import { ImageFrame } from './ImageFrame';

export function ImageFrames() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <ImageFrame
        label="Before"
        imageSrc="https://i.imghippo.com/files/HTAW6571HY.png"
        imageAlt="Instagram post before extension"
        Icon={Frown}
        iconColor="text-gray-600"
      />
      
      <ImageFrame
        label="After"
        imageSrc="https://i.imghippo.com/files/NDh5275FgE.png"
        imageAlt="Instagram post after extension"
        Icon={Smile}
        iconColor="text-purple-600"
      />
    </div>
  );
}