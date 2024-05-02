import { Projector, Scene } from '@/components/layout/Projector';
import { Scene00 } from '@/components/scenes/projects/marketbom-pro/scene00';

const SCENES: Scene[] = [
  {
    id: 'scene00',
    type: 'intro',
    description: '포트폴리오 가이드',
    runtime: 1,
    component: Scene00,
  },
];

export default function Home() {
  return <Projector scenes={SCENES} />;
}
