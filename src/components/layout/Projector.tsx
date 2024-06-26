'use client';
import { useRef } from 'react';
import { Main } from '@/components/layout/Main';
import { motion, useScroll } from 'framer-motion';

export type Scene = {
  id: string;
  type: 'intro' | 'scene' | 'ending';
  description: string;
  runtime: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  start?: number;
  end?: number;
  component: React.FC<any>;
};

const shoot = (scenes: Scene[]) => {
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

type Props = {
  scenes: Scene[];
};

export const Projector = (props: Props) => {
  const { scenes } = props;

  const { scrollYProgress } = useScroll({});

  const film = shoot(scenes);
  const totalRuntime = `${film.length * 200}vh`;

  return (
    <Main height={totalRuntime}>
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff0080] to-[#7928ca]"
        style={{ scaleX: scrollYProgress }}
      />
      {film.map((scene) => {
        return (
          <scene.component
            id={scene.id}
            key={scene.id}
            start={scene.start}
            end={scene.end}
            scrollYProgress={scrollYProgress}
            ending={scene.type === 'ending'}
          />
        );
      })}
    </Main>
  );
};
