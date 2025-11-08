import { Button } from "@/components/ui/button";
import { Camera, Upload, Sparkles } from "lucide-react";

const VirtualTryOn = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Technology</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Try Before You Buy
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Our revolutionary virtual try-on technology uses advanced AI to show you exactly how garments will look on you. Upload your photo or use your camera for an instant preview.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Upload Your Photo</h3>
                  <p className="text-sm text-muted-foreground">
                    Take or upload a full-body photo for the best results
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Select Your Style</h3>
                  <p className="text-sm text-muted-foreground">
                    Browse and choose from our extensive collection
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">See Instant Results</h3>
                  <p className="text-sm text-muted-foreground">
                    View yourself in the outfit with realistic fitting
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="luxury">
                <Upload className="mr-2 h-5 w-5" />
                Upload Photo
              </Button>
              <Button size="lg" variant="elegant">
                <Camera className="mr-2 h-5 w-5" />
                Use Camera
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <Camera className="h-24 w-24 mx-auto text-muted-foreground" />
                <p className="text-muted-foreground">
                  Virtual Try-On Preview
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTryOn;
