import { StoryScroller } from "@/components/features/StoryScroller";
import { Navigation } from "@/components/layout/Navigation";

export default function StoryPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navigation />
            <StoryScroller />
        </main>
    );
}
