import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import scene00 from '../components/scenes/scene00';
import scene01 from '../components/scenes/scene01';
import scene02 from '../components/scenes/scene02';
import scene03 from '../components/scenes/scene03';
import scene04 from '../components/scenes/scene04';

type Scene = {
  id: string;
  title: string;
  runtime: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  start?: number;
  end?: number;
  component: React.FC<any>;
};

const SCENES: Scene[] = [
  {
    id: 'scene00',
    title: 'guide',
    runtime: 1,
    component: scene00,
  },
  {
    id: 'scene01',
    title: 'hello',
    runtime: 1,
    component: scene01,
  },
  {
    id: 'scene02',
    title: 'About Me',
    runtime: 1,
    component: scene02,
  },
  {
    id: 'scene03',
    title: 'Experience',
    runtime: 1,
    component: scene03,
  },
  {
    id: 'scene04',
    title: 'Skills',
    runtime: 1,
    component: scene04,
  },
];

const ready = (scenes: Scene[]) => {
  // 전체 Scene들의 runtime 합계를 계산합니다.
  const totalRuntime = scenes.reduce((acc, scene) => acc + scene.runtime, 0);

  // 현재까지의 누적 runtime을 추적합니다.
  let accumulatedRuntime = 0;

  // 각 Scene에 대해 start와 end를 계산합니다.
  return scenes.map((scene) => {
    // 이 Scene의 시작점은 현재까지의 누적 runtime을 전체 runtime으로 나눈 값입니다.
    const start = accumulatedRuntime / totalRuntime;
    // 이 Scene의 끝점은 이 Scene의 runtime을 추가한 후 전체 runtime으로 나눈 값입니다.
    const end = (accumulatedRuntime + scene.runtime) / totalRuntime;

    // 다음 Scene을 위해 누적 runtime을 업데이트합니다.
    accumulatedRuntime += scene.runtime;

    // Scene 객체에 start와 end를 추가하여 반환합니다.
    return { ...scene, start, end };
  });
};

const IndexPage = () => {
  const film = ready(SCENES);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    container,
  });

  return (
    <>
      <Header />
      <Main ref={container} sectionCount={SCENES.length}>
        <motion.div
          className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff0080] to-[#7928ca]"
          style={{ scaleX: scrollYProgress }}
        />
        {film.map((scene) => (
          <scene.component
            key={scene.id}
            scrollYProgress={scrollYProgress}
            start={scene.start}
            end={scene.end}
          />
        ))}
      </Main>
      <Footer />
    </>
  );
};

export default IndexPage;
