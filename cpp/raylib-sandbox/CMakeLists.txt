cmake_minimum_required(VERSION 3.17.3)
project(raylib-sandbox)

find_package(raylib CONFIG REQUIRED)

set(CMAKE_C_STANDARD 11)

add_executable(raylib-sandbox main.cpp)

target_include_directories(raylib-sandbox PRIVATE ${raylib_INCLUDE_DIRS})
target_link_libraries(raylib-sandbox PRIVATE ${raylib_LIBRARIES})
