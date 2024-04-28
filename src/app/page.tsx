import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Projector, Scene } from '@/components/layout/Projector';
import { Scene00 } from '@/components/scenes/index/scene00';
import { Scene01 } from '@/components/scenes/index/scene01';
import { Scene02 } from '@/components/scenes/index/scene02';
import { Scene03 } from '@/components/scenes/index/scene03';
import { Scene04 } from '@/components/scenes/index/scene04';

const SCENES: Scene[] = [
  {
    id: 'scene00',
    type: 'intro',
    description: '포트폴리오 가이드',
    runtime: 1,
    component: Scene00,
  },
  {
    id: 'scene01',
    type: 'scene',
    description: '인사 및 간단한 자기소개',
    runtime: 1,
    component: Scene01,
  },
  {
    id: 'scene02',
    type: 'scene',
    description: '커리어',
    runtime: 1,
    component: Scene02,
  },
  {
    id: 'scene03',
    type: 'scene',
    description: '프로젝트',
    runtime: 1,
    component: Scene03,
  },
  {
    id: 'scene04',
    type: 'ending',
    description: 'Learning Lab',
    runtime: 1,
    component: Scene04,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Projector scenes={SCENES} />
      <Footer />
    </>
  );
}
