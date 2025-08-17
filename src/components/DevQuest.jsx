import { useState } from 'react';
import  { islandsData } from '../data/hackerOneRoadmap';
// import {islandsData} from '../data/cohortRoadmap'
import { Star, Lock, Trophy, Map, User, Award, CheckCircle, Circle, Target, Zap } from 'lucide-react';



export const DevQuest = () => {
    // const [currentLevel, setCurrentLevel] = useState(1);
    const [completedTopics, setCompletedTopics] = useState(new Set());
    const [unlockedIslands, setUnlockedIslands] = useState(new Set([1]));
    const [selectedIsland, setSelectedIsland] = useState(1);
    const [xp, setXp] = useState(0);

    const islands = islandsData;

    const toggleTopic = (islandId, topicIndex) => {
        const key = `${islandId}-${topicIndex}`;
        const newCompleted = new Set(completedTopics);

        if (completedTopics.has(key)) {
            newCompleted.delete(key);
            setXp(prev => prev - 10);
        } else {
            newCompleted.add(key);
            setXp(prev => prev + 10);

            // Check if island is complete to unlock next
            const island = islands.find(i => i.id === islandId);
            const islandTopics = island.topics.length;
            const completedInIsland = Array.from(newCompleted).filter(k => k.startsWith(`${islandId}-`)).length;

            if (completedInIsland === islandTopics && islandId < 10) {
                setUnlockedIslands(prev => new Set([...prev, islandId + 1]));
            }
        }

        setCompletedTopics(newCompleted);
    };

    const getIslandProgress = (islandId) => {
        const island = islands.find(i => i.id === islandId);
        const totalTopics = island.topics.length;
        const completed = Array.from(completedTopics).filter(k => k.startsWith(`${islandId}-`)).length;
        return { completed, total: totalTopics, percentage: Math.round((completed / totalTopics) * 100) };
    };

    const selectedIslandData = islands.find(i => i.id === selectedIsland);
    const progress = getIslandProgress(selectedIsland);



   return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                <Map className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  DevQuest: The Fullstack Archipelago
                </h1>
                <p className="text-purple-300">Your epic journey to fullstack mastery</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Zap className="w-5 h-5" />
                  <span className="font-bold text-xl">{xp}</span>
                </div>
                <div className="text-sm text-purple-300">XP Points</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-2 text-green-400">
                  <Trophy className="w-5 h-5" />
                  <span className="font-bold text-xl">{unlockedIslands.size}</span>
                </div>
                <div className="text-sm text-purple-300">Islands Unlocked</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Island Map */}
        <div className="lg:col-span-2">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Map className="w-6 h-6 text-purple-400" />
              The Archipelago
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {islands.map((island) => {
                const isUnlocked = unlockedIslands.has(island.id);
                const progress = getIslandProgress(island.id);
                const isCompleted = progress.percentage === 100;
                
                return (
                  <div
                    key={island.id}
                    onClick={() => isUnlocked && setSelectedIsland(island.id)}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      selectedIsland === island.id 
                        ? 'border-purple-400 scale-105' 
                        : 'border-purple-500/30'
                    } ${
                      isUnlocked 
                        ? `bg-gradient-to-br ${island.color}/20 hover:scale-105` 
                        : 'bg-gray-800/50 cursor-not-allowed'
                    }`}
                  >
                    {!isUnlocked && (
                      <div className="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center">
                        <Lock className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    
                    <div className="text-center">
                      <div className="text-3xl mb-2">{island.emoji}</div>
                      <h3 className="font-bold text-sm mb-1">{island.name}</h3>
                      <div className="text-xs text-purple-300 mb-2">Level {island.level}</div>
                      
                      {isUnlocked && (
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${island.color} transition-all duration-500`}
                            style={{ width: `${progress.percentage}%` }}
                          />
                        </div>
                      )}
                      
                      {isCompleted && (
                        <div className="absolute -top-2 -right-2">
                          <Trophy className="w-6 h-6 text-yellow-400" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Island Details */}
        <div>
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">{selectedIslandData.emoji}</div>
              <div>
                <h3 className="text-xl font-bold">{selectedIslandData.name}</h3>
                <p className="text-purple-300 text-sm">Level {selectedIslandData.level}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{progress.completed}/{progress.total}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full bg-gradient-to-r ${selectedIslandData.color} transition-all duration-500`}
                  style={{ width: `${progress.percentage}%` }}
                />
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Goal
              </h4>
              <p className="text-sm text-purple-300">{selectedIslandData.goal}</p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-3">Topics to Master</h4>
              <div className="space-y-2">
                {selectedIslandData.topics.map((topic, index) => {
                  const isCompleted = completedTopics.has(`${selectedIsland}-${index}`);
                  return (
                    <div
                      key={index}
                      onClick={() => toggleTopic(selectedIsland, index)}
                      className="flex items-center gap-3 p-2 rounded-lg bg-purple-900/30 hover:bg-purple-900/50 cursor-pointer transition-colors"
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${isCompleted ? 'line-through text-green-300' : 'text-purple-100'}`}>
                        {topic}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {selectedIslandData.sideQuest && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-yellow-400 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Side Quest
                </h4>
                <p className="text-sm text-yellow-300">{selectedIslandData.sideQuest}</p>
              </div>
            )}

            <div className="border-t border-purple-500/30 pt-4">
              <h4 className="font-semibold mb-2 text-green-400 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Unlock Reward
              </h4>
              <p className="text-sm text-green-300">{selectedIslandData.unlock}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevQuest;
