import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import Projector, { Scene } from '@/components/layout/Projector';
import { Scene00 } from '@/components/scenes/index/scene00';
import { Scene01 } from '@/components/scenes/index/scene01';
import { Scene02 } from '@/components/scenes/index/scene02';

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
    type: 'ending',
    description: '커리어와 활동 상세로 이동 가능한 링크',
    runtime: 1,
    component: Scene02,
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
